function DoSearch() {
  var Flag = 0;

  if (document.ToolBox.SearchOption[0].checked==true) {
    var Flag = 1;
    var Engine = document.ToolBox.SearchOption[0].value;
    var Query = document.ToolBox.SearchBox.value;
    var locName = "http://www.google.com/search?hl=en&q=";
      if (Query == "") {
        alert("Please digite a pesquisa termo");
        return;
      }
    location.href = (locName + Query)
  }

  if (document.ToolBox.SearchOption[1].checked==true) {
    var Flag = 1;
    var Engine = document.ToolBox.SearchOption[1].value;
    var Query = document.ToolBox.SearchBox.value;
    var locName = "http://pesquisa.yahoo.com/pesquisa?p=";
      if (Query == "") {
        alert("Please digite a pesquisa termo");
        return;
      }
    location.href = (locName + Query)
  }

  if (document.ToolBox.SearchOption[2].checked==true) {
    var Flag = 1;
    var Engine = document.ToolBox.SearchOption[2].value;
    var Query = document.ToolBox.SearchBox.value;
      if (Query == "") {
        alert("Please digite a pesquisa termo");
        return;
      }
    var pesquisaPage = "<HTML>";
      pesquisaPage += "\n";
      pesquisaPage += "<FRAMESET ROWS=\"50%,50%\">";
      pesquisaPage += "\n";
      pesquisaPage += "<FRAME SRC=\"http://www.google.com/pesquisa?hl=en&q=" + Query + "\">";
      pesquisaPage += "\n";
      pesquisaPage += "<FRAME SRC=\"http://pesquisa.yahoo.com/pesquisa?p=" + Query + "\">";
      pesquisaPage += "\n";
      pesquisaPage += "</FRAMESET>";
      pesquisaPage += "\n";
      pesquisaPage += "</HTML>";
      document.write(pesquisaPage);
  }

  if (Flag == 0) {
    alert("Please select a pesquisa engine");
  }
}
