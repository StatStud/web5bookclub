window.onload = () => {
    // (A) FILE PICKER
    let picker = document.getElementById("demoB");
   
    // (B) READ CSV FILE
    picker.onchange = () => {
      // (B1) GET SELECTED CSV FILE
      let selected = picker.files[0];
   
      // (B2) READ CSV INTO ARRAY
      let reader = new FileReader();
      reader.addEventListener("loadend", () => {
        // (B2-1) PARSE INTO ARRAY
        let csv = CSV.parse(reader.result);
   
        // (B2-2) REARRANGE KEYS & VALUES
        let data = {};
        for (let [col,key] of Object.entries(csv[0])) {
          data[key] = [];
          for (let row=1; row<csv.length; row++) {
            data[key].push(csv[row][col]);
          }
        }
        console.log(data);

        //START: my own code

        // console.log(Object.keys(data));

        //data = {title: [1,2,...,3],
        //        author: [1,2,...,3],}

        let list_html = "";

        //console.log(data['title']);

        // console.log(`here is the first title: ${data['title'][0]}`);
        // console.log(`here is the first author: ${data['author'][0]}`);
        // console.log(`here is the last title: ${data['title'][11]}`);
        // console.log(`here is the last title: ${data['author'][11]}`);
        tmp_array = data['title'];
        console.log(tmp_array);

        for (let i=0; i<tmp_array.length;i++){
          list_html += `
          <figure>
          <img src=${data['cover'][i]} class="bookcover">
          <figcaption class="caption">
              <strong> ${data['title'][i]} </strong>
              <br>By <i> ${data['author'][i]} </i></br>
          </figcaption>
          </figure>
          `;
        }

        // final_html = `
        // <h2> Here are some of the authors that I have read </h2>
        // <ol>
        // ${list_html}
        // </ol>
        // `;

        document.querySelector("#bookbox").innerHTML = list_html;

        // for (title in data['title']){
        //   console.log(title)
        // }

        //END: my own code



   
        // (B2-3) DONE!
        // data = JSON.stringify(data);
        // picker.value = "";
      });
      reader.readAsText(selected);
    };
  };