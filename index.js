class Formatter {
  //add static methods here
  static sanitize(str)
  {
    if (str == undefined || str == null) return null;
    else if (str.length < 1) return "";
    //else;//do nothing

    //first normalize the string
    let mynrmlstr = str.normalize();
    //console.log("normalized string = mynrmlstr = " + mynrmlstr);

    let mylen = mynrmlstr.length;
    for (let i = 0; i < mylen; i++)
    {
      if (mynrmlstr.charAt(i) === 'a' || mynrmlstr.charAt(i) === 'b' || mynrmlstr.charAt(i) === 'c' ||
      mynrmlstr.charAt(i) === 'd' || mynrmlstr.charAt(i) === 'e' || mynrmlstr.charAt(i) === 'f' ||
      mynrmlstr.charAt(i) === 'g' || mynrmlstr.charAt(i) === 'h' || mynrmlstr.charAt(i) === 'i' ||
      mynrmlstr.charAt(i) === 'j' || mynrmlstr.charAt(i) === 'k' || mynrmlstr.charAt(i) === 'l' ||
      mynrmlstr.charAt(i) === 'm' || mynrmlstr.charAt(i) === 'n' || mynrmlstr.charAt(i) === 'o' ||
      mynrmlstr.charAt(i) === 'p' || mynrmlstr.charAt(i) === 'q' || mynrmlstr.charAt(i) === 'r' ||
      mynrmlstr.charAt(i) === 's' || mynrmlstr.charAt(i) === 't' || mynrmlstr.charAt(i) === 'u' ||
      mynrmlstr.charAt(i) === 'v' || mynrmlstr.charAt(i) === 'w' || mynrmlstr.charAt(i) === 'x' ||
      mynrmlstr.charAt(i) === 'y' || mynrmlstr.charAt(i) === 'z' || mynrmlstr.charAt(i) === 'A' ||
      mynrmlstr.charAt(i) === 'B' || mynrmlstr.charAt(i) === 'C' || mynrmlstr.charAt(i) === 'D' ||
      mynrmlstr.charAt(i) === 'E' || mynrmlstr.charAt(i) === 'F' || mynrmlstr.charAt(i) === 'G' ||
      mynrmlstr.charAt(i) === 'H' || mynrmlstr.charAt(i) === 'I' || mynrmlstr.charAt(i) === 'J' ||
      mynrmlstr.charAt(i) === 'K' || mynrmlstr.charAt(i) === 'L' || mynrmlstr.charAt(i) === 'M' ||
      mynrmlstr.charAt(i) === 'N' || mynrmlstr.charAt(i) === 'O' || mynrmlstr.charAt(i) === 'P' ||
      mynrmlstr.charAt(i) === 'Q' || mynrmlstr.charAt(i) === 'R' || mynrmlstr.charAt(i) === 'S' ||
      mynrmlstr.charAt(i) === 'T' || mynrmlstr.charAt(i) === 'U' || mynrmlstr.charAt(i) === 'V' ||
      mynrmlstr.charAt(i) === 'W' || mynrmlstr.charAt(i) === 'X' || mynrmlstr.charAt(i) === 'Y' ||
      mynrmlstr.charAt(i) === 'Z' || mynrmlstr.charAt(i) === '0' || mynrmlstr.charAt(i) === '1' ||
      mynrmlstr.charAt(i) === '2' || mynrmlstr.charAt(i) === '3' || mynrmlstr.charAt(i) === '4' ||
      mynrmlstr.charAt(i) === '5' || mynrmlstr.charAt(i) === '6' || mynrmlstr.charAt(i) === '7' ||
      mynrmlstr.charAt(i) === '8' || mynrmlstr.charAt(i) === '9' || mynrmlstr.charAt(i) === "'" ||
      mynrmlstr.charAt(i) === '-' || mynrmlstr.charAt(i) === ' ')
      {
        //do nothing safe
      }
      else
      {
        mynrmlstr = mynrmlstr.substring(0, i) + mynrmlstr.substring(i + 1);
        i--;
        mylen--;
      }
    }
    return mynrmlstr;
  }
  static capitalize(mystr)
  {
    if (mystr == undefined || mystr == null) return null;
    else if (mystr.length < 1) return "";
    //else;//do nothing

    let str = this.sanitize(mystr);
    if (str.length < 1) return "";
    else if (str.length == 1) return "" + str.toUpperCase();
    else return str.substring(0, 1).toUpperCase() + str.substring(1);
  }
  static titleize(mystr)
  {
    if (mystr == undefined || mystr == null) return null;
    else if (mystr.length < 1) return "";
    //else;//do nothing

    //console.log("init mystr = " + mystr);
    
    let str = this.sanitize(mystr);

    //console.log("sanitized str = " + str);

    if (str.length < 1) return "";
    else if (str.length == 1) return str.toUpperCase();
    else
    {
      let mywordsarr = str.split(" ");
      let exwordsarr = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
      let myretstr = "";
      for (let n = 0; n < mywordsarr.length; n++)
      {
        //console.log("mywordsarr[" + n + "] = " + mywordsarr[n]);
        let isexword = false;
        if (n == 0);
        else
        {
          for (let k = 0; k < exwordsarr.length; k++)
          {
            if (exwordsarr[k] === mywordsarr[n])
            {
              isexword = true;
              //console.log("this should not be capitalized!");
              break;
            }
            //else;//do nothing
          }
        }
        //console.log("isexword = " + isexword);

        if (isexword)
        {
          //console.log("just add it as is here!");
          //console.log("mywordsarr[" + n + "] = " + mywordsarr[n]);
          myretstr += mywordsarr[n];
        }
        else
        {
          //console.log("this.capitalize(mywordsarr[" + n + "]) = " + this.capitalize(mywordsarr[n]));
          myretstr += this.capitalize(mywordsarr[n]);
        }

        if (n + 1 < mywordsarr.length) myretstr += " ";
        //else;//do nothing
        //console.log("NEW myretstr = " + myretstr);
        //console.log("moving on to the next word!");
      }//end of n for loop
      //console.log("FINAL myretstr = " + myretstr);
      return myretstr;
    }
  }
}
