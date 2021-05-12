function toggle_hidden(document_id, expanded_text, collapsed_text, button_id, aria)
{
if(document.getElementById(document_id).hidden==true)
{
document.getElementById(document_id).hidden=false;
document.getElementById(aria).innerHTML=expanded_text;
if(button_id!="")
{
document.getElementById(button_id).innerHTML=expanded_text;
}
}
else if(document.getElementById(document_id).hidden==false)
{
document.getElementById(document_id).hidden=true;
document.getElementById(aria).innerHTML=collapsed_text;
if(button_id!="")
{
document.getElementById(button_id).innerHTML=collapsed_text;
}
}
else
{
document.getElementById(aria).innerHTML="error";
}
}
