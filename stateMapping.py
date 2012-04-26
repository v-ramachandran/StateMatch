import csv
with open('./stateMapping.csv','rb' ) as f:
  reader = csv.reader(f)
  strArr = []
  for row in reader:
    x,y = row[0].strip(),row[1].strip()
    strArr.append(['\'%s\''%x,'\'%s\''%y,])

with open('./stateMappingStripped.csv','wb') as f:
  writer = csv.writer(f)
  writer.writerows(strArr)
  
