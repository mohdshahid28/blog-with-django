var script= document.createElement('script');
script.type='text/javascript';
script.src="https://cdn.tiny.cloud/1/ONLINE+T8LK:eyJhcGlfa2V5IjoibmJrc2M0Y2cxanRwd3NnMmJmOW5hYTE1YWgxYXJlNGt0bDBsdHp3YTBpMjFtdHo0IiwiYWxnIjoiRVMyNTYiLCJ4NWMiOlsiTUlJQm1EQ0NBVDJnQXdJQkFnSVViU0tjaVAyUThwTUxSU3NvSUtvbnFDV2JsNVV3Q2dZSUtvWkl6ajBFQXdJd1B6RWFNQmdHQTFVRUNnd1JWR2x1ZVNCVVpXTm9ibTlzYjJkcFpYTXhJVEFmQmdOVkJBTU1HRlJwYm5sTlEwVWdPQ0JzYVdObGJuTmxJR3RsZVNCRFFUQWdGdzB5TlRBME1UQXdOREkyTVRCYUdBOHlNRGMxTURFd01UQTBNall4TUZvd0VqRVFNQTRHQTFVRUF3d0hWRGhNUzFNdFVEQlpNQk1HQnlxR1NNNDlBZ0VHQ0NxR1NNNDlBd0VIQTBJQUJHZ045alBuRmtqNUNFUmxCQ1JDTDRpYjlwQzFKOVN6eGowZnJFNUJIMXRPMmhGWEJpTXdlZUYxYXhIenIwRHJ4cnFBNHQzRW0yWWlGMnpJOGVRaGtnR2pRakJBTUIwR0ExVWREZ1FXQkJRNHVONm5URHpjdWJpRzF1RE90ODlJUDJBVkJUQWZCZ05WSFNNRUdEQVdnQlRxaGpzbDdJVnRGRWFTL2hTUlF4Yk9mbmlhUVRBS0JnZ3Foa2pPUFFRREFnTkpBREJHQWlFQTJrR05lWUZ0a2p2L3phc1BFSlowUFRWUzltSnUxWkVmL1pJUExhRUgyejBDSVFEUU5xQS9BRU1RZUJ6Nk9FRzZQbXlYRWpCVWQ1akQwcXFZcFUvaTNYYS9lUT09Il19.CiQwMWEwZjEwMy1lOTRhLTc5ODItOTdhNC0xNTY3OWUyZDU1ZDcoAZoCUWh0dHBzOi8vY2RuLnRpbnkuY2xvdWQvMS9uYmtzYzRjZzFqdHB3c2cyYmY5bmFhMTVhaDFhcmU0a3RsMGx0endhMGkyMW10ejQvbGljZW5zZcICEAoMCP-uwNYGEMCPrtwDEgCwBAjSBQEB.OjFjeq9TZsQBCW81cSWlvYfeW9J4fqOTw8ZrE623WkZC1-zqpmRENGABYvy35Hc7suaXogOqKtZUOazP8UE10Q/tinymce/5/tinymce.min.js";
document.head.appendChild(script);

script.onload=function(){
tinymce.init({
    selector: "#id_content",
    height:656,
    plugins: [
        'advlist autolink link image lists charmap print preview hr anchor pagebreak',
        'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
        'table emoticons template paste help'
      ],
      toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | ' +
        'bullist numlist outdent indent | link image | print preview media fullpage | ' +
        'forecolor backcolor emoticons | help',
      menu: {
        favs: {title: 'My Favorites', items: 'code visualaid | searchreplace | emoticons'}
      },
      menubar: 'favs file edit view insert format tools table help',
      content_css: 'css/content.css'
    });
}