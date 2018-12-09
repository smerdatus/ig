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

# PSEUDOCODE:
# for each user, generate images like import `username_i` from 'file'
# then import them; figure out how to display them and navigate

# for item in dictionary:
# for name, values in sorted(dictionary.items(), key=lambda x: x[0]):
#     link = 'https://instagram.com/{}'.format(name)
#     # print '<a href="{}" target="_blank">{}</a>'.format(link, name)
#     for value in values:
#         print value.rstrip()

# array = []

# i = 0

# while i < len(array):
#     img = "./assets/{}".format(array[i]) # UPDATE THIS
#     print("import img_{} from '{}';".format(i, img))
#     i += 1

# i = 0

# while i < len(array):
#     img = "img_{}".format(i) 
#     print("          <div style={{{{padding: '1vh' }}}} onClick={{() => this.setState({{video: {}}})}}>\n            <img src={{{}}} style={{{{height: '20vh'}}}} />\n          </div>".format(video, img))
#     i += 1