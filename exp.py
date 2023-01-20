def helper(list, start, end):
    pivot = list[end]
    i = start - 1
    for j in range(start, end):
        if list[j] <= pivot:

            i += 1

            (list[i], list[j]) = (list[j], list[i])
    (list[i + 1], list[end]) = (list[end], list[i + 1])
    return i + 1
 
def qsort(list, start, end):
    if start < end:
        pi = helper(list, start, end)
        qsort(list, start, pi - 1)
        qsort(list, pi + 1, end)

arr = [5,4,3,2,1]
qsort(arr, 0, 4)
print(arr)