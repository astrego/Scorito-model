const downloadButton = document.querySelector('button');

downloadButton.addEventListener('click', (e) => {
    e.preventDefault();

    axios({
        url: '/download',
        method: 'GET',
        responseType: 'blob', // important
      }).then((response) => {
         const url = window.URL.createObjectURL(new Blob([response.data]));
         const link = document.createElement('a');
         link.href = url;
         link.setAttribute('download', 'model.xlsx'); //or any other extension
         document.body.appendChild(link);
         link.click();
      });

})