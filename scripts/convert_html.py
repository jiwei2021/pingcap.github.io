# Convert html links of a tags and src of img tags

from bs4 import BeautifulSoup

import os
import re
import sys

if sys.version_info.major == 3:
    unicode = str

abs_hyper_link_pattern = re.compile(r'https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}')
image_rel_src_pattern = re.compile(r'^[\.\/]*media\/')

pingcap_com_blog_or_case_hyper_link_pattern = re.compile(r'https?:\/\/(www\.)?pingcap.com\/(blog|cases?)-cn\/([-a-zA-Z0-9@:%._\+~#=]{2,256})')

file_path = sys.argv[1]
folder = sys.argv[2]
default_version = ''

if file_path == "dist/docs/index.html" or file_path == "dist/docs-cn/index.html":
    default_version = '/stable'

with open(file_path, 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

for link in soup.find_all('a'):
    href = link['href']
    if href:
        result = pingcap_com_blog_or_case_hyper_link_pattern.match(href)
        if result:
            href = "https://pingcap.com.cn/%s/%s" % (result.groups()[1], result.groups()[2])
        elif (not abs_hyper_link_pattern.match(href)) and href.rfind('.md') > 0:
            href = href.replace('.md', '')
            href = re.sub(r'^[\.\/]*', '/', href, count=0, flags=0)
            href = os.path.normpath('/' + folder + default_version + '/' + href)
        link['href'] = href

for img in soup.find_all('img'):
    src = img['src']

    if src:
        if (not abs_hyper_link_pattern.match(src)) and image_rel_src_pattern.match(src):
            _src = re.sub(r'[\.\/]*media\/', '/', src, count=0, flags=0)
            if (folder == 'case'):
                folder = 'blog-cn'
                _src = 'https://download.pingcap.com.cn/images/' + folder + _src
            else:
                _src = "/%s/media%s" % (folder, _src)
#             _src = "/%s/media%s" % (folder, _src)
            img['data-original']= _src
            print("_src", _src)
        else:
            img['data-original']= src
        img['src'] = '/images/svgs/loader-spinner.svg'
        img['class'] = 'lazy'

# Write html
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(unicode(soup))
