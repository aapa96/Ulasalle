

# import mysql.connector
# import json
# config = {
#   'user': 'root',
#   'password': 'root',
#   'unix_socket': '/Applications/MAMP/tmp/mysql/mysql.sock',
#   'database': 'people',
#   'raise_on_warnings': True,
# }

# link = mysql.connector.connect(**config)



# mycursor = link.cursor()

# contactos=[]


# sql = "SELECT * FROM contacto"
# mycursor.execute(sql)
# file = open('testfile.txt','w') 
# for row in mycursor.fetchall():
#   contactos.append(row)

# for row in contactos:
#   file.write(row[0] + ',')
#   file.write(row[1] + ',')
#   file.write(row[2] + ',')
#   file.write(row[3] + ',')
#   file.write(row[4] + ',')
#   file.write(str(row[5]) + ',')
#   file.write(str(row[6]) + ',')
#   file.write('\n')
#   print(row)

# file.close() 

# link.close()



# def hamming_distance()

def hamming_distance(s1, s2):
    assert len(s1) == len(s2)
    return sum(ch1 != ch2 for ch1, ch2 in zip(s1, s2))

x = [1,2,3,4,5]
for i in range(len(x)):
  tmp = hamming_distance(x[i],1)
  print(x[i],1,x[i],2)
  print(tmp)
  