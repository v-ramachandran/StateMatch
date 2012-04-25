from sklearn.metrics import auc
import numpy as np
from pylab import *
# import pandas
import time
# import pylab
import matplotlib.pyplot as plt
import matplotlib.cm as cm
import sys
import numpy
import pickle
from pandas import *

if __name__ == "__main__":
   v =read_csv("data/crimeRatesOverYears.csv")
   print v 