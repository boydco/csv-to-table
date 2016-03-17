function processFile() {
	var fileSize = 0
	var theFile = document.getElementById("sampleFile").files[0]
	if (theFile) {
		var table = document.getElementById("dataTable")
		var headerLine = ""
		var dataReader = new FileReader()
		dataReader.onload = function(e) {
			var content = dataReader.result
			var lines = content.split("\r")
			for (var count = 0; count < lines.length; count++) {
				var row = document.createElement("tr")
				var rowContent = lines[count].split(",")
				for (var i = 0; i < rowContent.length; i++) {
					if (count == 0) {
						var cellElement = document.createElement("th")
					} else {
						var cellElement = document.createElement("td")
					}
					var cellContent = document.createTextNode(rowContent[i])
					cellElement.appendChild(cellContent)
					row.appendChild(cellElement)
				}
				dataTable.appendChild(row)
			}
		}
		dataReader.readAsText(theFile)
	}
	return false
}
