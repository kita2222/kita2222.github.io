const reader = new NDEFReader();

reader
  .scan()
  .then(() => {
    reader.onerror = (event) => {
      updateStatus(`Error: ${error}`);
    };
    reader.onreading = (event) => {
      updateResult(event);
    };
  })
  .catch((error) => {
    updateStatus(`Error! Scan failed to start: ${error}.`);
  });

const updateStatus = (str) => {
  $("#status").empty();
  $("#status").text(str);
};

const updateResult = (obj) => {
  //表示を一旦削除
  $("#serialnumber").empty();
  $("#type").empty();
  $("#timeStamp").empty();

  if (!obj) {
    return obj;
  }
  
  //ステータス表記を更新
  updateStatus("Success");

  //読み取り内容に基づき内容を更新
  $("#type").text(obj.type);
  $("#serialnumber").text(obj.serialNumber);
  $("#timeStamp").text(obj.timeStamp);
};