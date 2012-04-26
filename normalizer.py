import csv

def normLe(num):
  return  (10*num)/78.8
def normCr(num):
  return  (10*num)/65.423
def normUn(num):
  return  (10*num)/12.6


strArr = []
stateArr = []
unempArr = []
lifeExpectArr = []
crimeArr = []
with open('./data/unempFINAL.csv', 'rb') as f:
  reader = csv.reader(f)
  i = 0
  for row in reader:
    if i == 0:
      i = i + 1
      continue
    else:
      stateArr.append(row[0])
      unempArr.append(float(row[1]))
      lifeExpectArr.append(float(row[2]))
      crimeArr.append(float(row[5]))
    #strArr.append([row[0],'\'%s\''%(row[1]), row[2]] )
  #lifeExpectArr.sort()
  #unempArr.sort()
  #crimeArr.sort()
  '''
  print unempArr
  print lifeExpectArr[0], lifeExpectArr[len(lifeExpectArr) - 1] 
  print unempArr[0], unempArr[len(unempArr) - 1] 
  print crimeArr[0], crimeArr[len(crimeArr) - 1] 
 
  global maxUn 
  maxUn = max(unempArr)
  global maxCr 
  maxCr = max(crimeArr)
  global maxLe 
  maxLe = max(lifeExpectArr)
  global dMax 
  dMax = 100
  '''
  print max(unempArr)
  print max(crimeArr)
  print max(lifeExpectArr) 
resultArr = []
resultArr.append(['State','Unemp','LifeExp','Crime' ] )
for i in range(len(stateArr)):
  resultArr.append([stateArr[i], normUn(unempArr[i]), normLe(lifeExpectArr[i]), normCr(crimeArr[i]) ] ) 
print resultArr
with open('./data/unempFINAL_NORMALIZED.csv', 'wb') as f:
  writer = csv.writer(f)
  writer.writerows(resultArr)
for row in resultArr:
  print row

