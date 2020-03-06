import math
import os
import random
import re
import sys
from collections import Counter


def cutTheSticks(arr):
    result = list()
    l = len(arr)
    for k,v in sorted(Counter(arr).items()):
        result.append(l)
        l-=v
    return result
