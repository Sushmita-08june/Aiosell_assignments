import json

##loading the input file

with open("json_to_xml1.json") as json_file:
    data = json.load(json_file)
    
##importing and renaming the library
import xml.etree.cElementTree as ET

##creating root object
root = ET.Element("RES_Request")

##creating the request type tag
ET.SubElement(root, "Request_Type").text = "UpdateRoomRates"

##iterating through rooms
for room in data["rooms"]:    
  ## iterating through rateplans
    for rateplan in room["rateplans"]:
        rateplans = ET.SubElement(root,"RateType")
        ET.SubElement(rateplans, "RoomTypeID").text = room["roomId"]
        ET.SubElement(rateplans, "RateTypeID").text = rateplan["rateplanId"]
        ET.SubElement(rateplans, "FromDate").text = data["startDate"]
        ET.SubElement(rateplans, "ToDate").text = data["endDate"]
        ET.SubElement(rateplans, "Taxinclusive").text = str(data["taxInclusive"])
        rate = ET.SubElement(rateplans,"RoomRate")
        ET.SubElement(rate, "Base").text = rateplan["rate"]["rackRate"]
        
##exporting the data to xml file   
xmltree = ET.ElementTree(root)
xmltree.write("xmlform.xml")
