import math
import os
import random
import re
import sys

def squares(a, b):
    ans = 0
    for i in range(a, b+1):
        sr = math.sqrt(i)
        if ((sr - math.floor(sr)) == 0):
            ans+=1

    return ans
