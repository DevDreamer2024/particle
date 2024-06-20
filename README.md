# particle
If you want to change the aspect of the particles :
<br>
1/ visit https://particles.js.org/
<br>
2/top right choose your preset and select export to download the json file
<br>
3/use https://csvjson.com/json_beautifier or another beautifier to past the json file and untick the data ( on key only)
<br>
4/replace the data in ParticlesBackground.js  (ligne 34)
<br>
5/you may have to check the number of ()
<br>
6/type yarn dev to see the result
<br>
If you cant see your text try messing with the opacity (ligne 43) and/or with the zIndex (ligne 60)