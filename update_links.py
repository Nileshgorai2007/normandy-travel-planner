import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

fb_url = "https://www.facebook.com/normandytourisme"
ig_url = "https://www.instagram.com/normandytourisme"
tw_url = "https://twitter.com/NormandieTour"
yt_url = "https://www.youtube.com/channel/UCPiyIE62BsBEbZt8334CrMg/videos"

for f_name in html_files:
    with open(f_name, 'r', encoding='utf-8') as f:
        content = f.read()

    urls = [fb_url, ig_url, tw_url, yt_url]
    for url in urls:
        pattern = r'(<a\s+href="' + re.escape(url) + r'")([^>]*)>'
        def repl(match):
            m1 = match.group(1)
            m2 = match.group(2)
            if 'target="_blank"' not in m2:
                m2 += ' target="_blank" rel="noopener noreferrer"'
            return m1 + m2 + '>'
            
        content = re.sub(pattern, repl, content)
        
    with open(f_name, 'w', encoding='utf-8') as f:
        f.write(content)
print("Updated target blank!")
