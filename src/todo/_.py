import re
import collections

f = open("./list.txt","r")
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

print dictionary