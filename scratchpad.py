import re

with open('destinations.html', 'r', encoding='utf-8') as f:
    text = f.read()

pattern = re.compile(r'<a href="planner\.html" class="btn btn-sm btn-gold">Plan Trip</a>\s*<a href="package\.html\?dest=([^"]+)" class="btn btn-sm btn-outline-gold">Build Package</a>')

def replacer(m):
    dest = m.group(1)
    return f'<a href="planner.html?dest={dest}" class="btn btn-sm btn-gold">Plan Trip</a>\n                <a href="package.html?dest={dest}" class="btn btn-sm btn-outline-gold">Build Package</a>'

new_text = pattern.sub(replacer, text)

with open('destinations.html', 'w', encoding='utf-8') as f:
    f.write(new_text)

print("Done replacing.")
