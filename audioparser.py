from pydub import AudioSegment 


#https://www.geeksforgeeks.org/cut-a-mp3-file-in-python/

#Open mp3 file
song = AudioSegment.from_file("Sweden.mp3", format="mp3") 
  
#Start and End Times
start_min = 1
start_sec = 10
end_min = 2
end_sec = 5
  
# pydub does things in milliseconds, so convert time 
start = ((start_min*60)+start_sec)*1000
end = ((end_min*60)+end_sec)*1000
  
# song clip of 10 seconds from starting 
first_10_seconds = song[start: end] 
  
# save file 
first_10_seconds.export("middleTest.mp3", format="mp3") 
print("New Audio file is created and saved") 
