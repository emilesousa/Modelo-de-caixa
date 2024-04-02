
        function toggleContent() {
            var conteudos = document.querySelectorAll('.conteudo');
            conteudos.forEach(function(conteudo) {
                if (conteudo.style.display === 'none') {
                    conteudo.style.display = 'block';
                } else {
                    conteudo.style.display = 'none';
                }
            });
        }
   