document.write("<ul id=\"acessibilidade\">");
document.write("<li><a href=\"#menu\" title=\"Ir direto ao menu.\">Saltar para
menu</a></li>");
document.write("<li><a href=\"#conteudo\" title=\"Pule direto ao conte¨&uacute;do dessa se&ccedil;atilde;o.\">Conte&uacute;do dessa seção</a></li>");

// Tamanho das letras
document.write("<li class=\"oculto\" id=\"oculto-1\"><a href=\"#topo-pg\" onclick=\"setActiveStyleSheet('padrao'); return false;\" title=\"Tamanho original das letras\">Tamanho original das letras</a></li>");
document.write("<li class=\"oculto-1\" id=\"oculto-2\"><a href=\"#topo-pg\" onclick=\"setActiveStyleSheet('preto_branco'); return false;\" title=\"Tamanho original das letras\">Tamanho original das letras</a></li>");


// Aumenta tamanho das letras
document.write("<li class=\"oculto\" id=\"oculto-3\"><a href=\"#topo-pg\" onclick=\"setActiveStyleSheet('letra-maior'); return false;\" title=\"Aumentar tamanho das letras\">Aumentar tamanho das letras</a></li>");
document.write("<li class=\"oculto-1\" id=\"oculto-5\"><a href=\"#topo-pg\" onclick=\"setActiveStyleSheet('preto_branco_maior'); return false;\" title=\"Aumentar tamanho das letras\">Aumentar tamanho das
letras</a></li>");


// Diminui tamanho das letras
document.write("<li class=\"oculto\" id=\"oculto-4\"><a href=\"#topo-pg\" onclick=\"setActiveStyleSheet('letra-menor'); return false;\" title=\"Diminuir tamanho das letras\">Diminuir tamanho das letras</a></li>");
document.write("<li class=\"oculto-1\" id=\"oculto-6\"><a href=\"#topo-pg\" onclick=\"setActiveStyleSheet('preto_branco_menor'); return false;\" title=\"Diminuir tamanho das letras\">Diminuir tamanho das
letras</a></li>");

// Alto contraste e cores originais
document.write("<li class=\"oculto-1\"><a href=\"#topo-pg\" onclick=\"setActiveStyleSheet('padrao'); return false;\" title=\"Cores originais\">Cores originais</a></li>");
document.write("<li class=\"oculto\"><a href=\"#topo-pg\" onclick=\"setActiveStyleSheet('preto_branco'); return false;\" title=\"Alto contraste\">Alto contraste</a></li>");
document.write("</ul>");
