#!/usr/bin/python
from __future__ import division
import math
import sys
import re

import numpy as np
from pandas import *

def clean(df):
    d1 = df.drop(['a'], axis=1)
    d2 = d1.drop(['b'], axis=1)
    d3 = d2.drop(['c'], axis=1)
    d4 = d3.drop(['d'], axis=1)
    d5 = d4.drop(['e'], axis=1)
    d6 = d5.drop(['f'], axis=1)
    d7 = d6.drop(['fips'], axis=1)
    d8 = d7[d7["Year"] > 1989]
    d9 = d8[d8["Year"] < 2010]
    d9.to_csv("./test.csv",index=False)

def main(*args):
  df = read_csv('lifeExpectancy_perYear.csv')
  clean(df)

if __name__ =='__main__':
    sys.exit(main(*sys.argv[1:]))
