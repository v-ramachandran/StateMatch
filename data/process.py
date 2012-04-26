import numpy as np
from pylab import *
import matplotlib.pyplot as plt
import matplotlib.cm as cm
from pandas import *

df = read_csv("lifeExpectancy(1990-2009).csv")
print "Loaded Data."
df = df[df['Year']==2009]
print "Filtered by Year."
df.to_csv("2009LifeExpectancy.csv", index=False)
print "Outputted Data."