import pymongo
import certifi

con_str="mongodb+srv://test:A13542!.@cluster0.8rlefsz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
client = pymongo.MongoClient(con_str, tlsCAFile=certifi.where())
db = client.get_database("project")