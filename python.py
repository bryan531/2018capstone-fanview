# # Global Life Park

# for i in range(346):
# 	if i < 3 or (i > 54 and i < 112) or (i > 139 and i < 201) or (i > 251 and i < 301) or i==246:
# 		continue
    
# 	# print('<li><a href="' + str(i) + '" class="dropdown-item">' + str(i) + '</a></li>')
# 	print('{"sectionPath": "stadiums/mmp/glp/' + str(i) + '", "sectionNumber": ' + str(i) + ', "pictures": []},')


# Minute Maid Park

for i in range(100,439):
	if (i == 107) or (i == 115) or (i == 117) or (i == 121) or (i == 123) or (i == 130) or (i > 134 and i < 150) \
	or (i > 156 and i < 205) or (i > 236 and i < 250) or (i > 258 and i < 305) or (i == 308) or (i == 312) or (i == 326)\
	or (i == 335) or (i > 338 and i < 406) or (i == 412) or (i == 426) or (i == 435):
		continue
	print('{"sectionPath": "/stadiums/mmp/' + str(i) + '", "sectionNumber": ' + str(i) + ', "pictures": []},')



