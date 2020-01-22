for method in [str.isalnum, str.isalpha, str.isdigit, str.islower, str.isupper]:
    print (any(method(c) for c in s))