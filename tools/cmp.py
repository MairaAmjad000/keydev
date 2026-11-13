import sys, numpy as np
from PIL import Image
a=np.asarray(Image.open(sys.argv[1]).convert('RGB')).astype(int); b=np.asarray(Image.open(sys.argv[2]).convert('RGB')).astype(int)
print('sizes ref',a.shape[:2],'mine',b.shape[:2])
h=min(a.shape[0],b.shape[0]); w=min(a.shape[1],b.shape[1])
d=(np.abs(a[:h,:w]-b[:h,:w]).sum(axis=2)>0)
print('differing pixels: %d (%.4f%%)'%(d.sum(),100*d.sum()/d.size))
if d.sum():
    rows=np.where(d.any(axis=1))[0]; print('first/last differing row',rows[0],rows[-1])
    # bands of 200px
    bands=[(i,int(d[i:i+200].sum())) for i in range(0,h,200) if d[i:i+200].sum()]
    print(bands[:15])
