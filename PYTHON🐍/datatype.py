number : int=10
decimal : float=2.3
text:str="Hello world!"
active:bool=True

name:list=["jishnu","jishnu sv","jishnu vijayan"]
coordinates:tuple=(2.5,4.5)
unique:set={1,2,3,4,6}
data:dict={"name":"jishnu","age":23}


# type annotation 

# constant
from typing import Final
VERSION:Final[str]='1.0.12'
# VERSION='1.1' showing error line ? 