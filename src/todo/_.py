import re
import collections

f = open("./list_s.txt","r")
f1 = f.readlines()

dictionary = collections.defaultdict(list)

for line in f1:
    split = re.split(r"_\d+_\d+_\d+_n.", line)
    user = split[0]
    dictionary[user].append(line)
    # fileType = split[1]
    # print user
    # print fileType

f.close()

# for item in dictionary:
for name, values in sorted(dictionary.items(), key=lambda x: x[0]):
    link = 'https://instagram.com/{}'.format(name)
    # print '<a href="{}">{}</a>'.format(link, name)
    for value in values:
        print value.rstrip()