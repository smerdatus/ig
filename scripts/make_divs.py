# g',enerate array with bash
# files=(*.mp4)
# for item in $files
#do
#printf "'%s'," $item
#done

array = ['coconutflower_13473297_268703563483485_1776237319_n.jpg',
'coconutflower_13525313_245923019112624_581129935_n.jpg',
'coconutflower_13767636_304621696559477_1051880155_n.jpg',
'coconutflower_14052481_1783898958554000_1653460391_n.jpg',
'coconutflower_14269158_1649156362062229_584558246_n.jpg',
'coconutflower_14597320_1684771068506097_4555141799017971712_n.jpg',
'coconutflower_14659295_337127096640946_42126778700922880_n.jpg',
'coconutflower_15043574_1304684819625442_1550649215816826880_n.jpg',
'coconutflower_15275642_1555731194443475_2402824199686062080_n.jpg',
'coconutflower_15306080_1805947826319805_1559231994993311744_n.jpg',
'coconutflower_15535315_348069992239882_7438374042270171136_n.jpg',
'coconutflower_15876968_141818426316163_7899888391557218304_n.jpg',
'coconutflower_16908610_205900273220119_6093415221190197248_n.jpg',
'coconutflower_18512673_1347173308702647_5128701296617979904_n.jpg',
'coconutflower_18513897_1277844812264765_7634968636871933952_n.jpg',
'coconutflower_19228267_1410748169014071_5509105235764707328_n.jpg',
'coconutflower_19228598_836634669822138_7670354850948841472_n.jpg',
'coconutflower_19933129_124645588138569_3605057447883964416_n.jpg',
'coconutflower_20065613_149353038950664_7125450580578795520_n.jpg',
'coconutflower_21227166_1387510634703757_5459445754441498624_n.jpg',
'coconutflower_21227791_927317834072565_4122287629058179072_n.jpg',
'coconutflower_21294815_122900531697864_5631786569938501632_n.jpg',
'coconutflower_21688947_115751685759750_9067703257903661056_n.jpg',
'coconutflower_26262799_261368447730105_7002723371859312640_n.jpg',
'coconutflower_28433975_158004904861514_8652876775082164224_n.jpg',
'coconutflower_36660449_421743734990988_1984290537317859328_n.jpg',
'coconutflower_39387927_488200584987535_7467840563052544000_n.jpg',
'coconutflower_39982608_301987720353393_9194222321450090496_n.jpg']

i = 0

while i < len(array):
    img = "./assets/{}".format(array[i])
    print("import img_{} from '{}';".format(i, img))
    i += 1

i = 0

while i < len(array):
    img = "img_{}".format(i) 
    print("          <div style={{{{padding: '1vh' }}}} onClick={{() => this.setState({{image: {}}})}} >\n            <img src={{{}}} style={{{{height: '20vh'}}}} />\n          </div>".format(img, img))
    i += 1

