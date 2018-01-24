var FirasWeb = FirasWeb || {};


FirasWeb.ExpandElem = function(eID)
{
    var elm = document.getElementById(eID);
    var x = document.getElementsByTagName("BODY")[0];

        if(elm!==null){
            if(elm.className.indexOf('expanded')!==-1)
            {
                elm.className = elm.className.replace(' expanded','');
                 x.className=x.className.replace(' stop_body_scrolling', '');
            } else {
                elm.className = elm.className + " expanded";
                x.className=x.className + " stop_body_scrolling";
            }
        }

}
    