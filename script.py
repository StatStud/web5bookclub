
import base64
import pandas as pd

def get_data():
    def create_onedrive_directdownload (onedrive_link):
        data_bytes64 = base64.b64encode(bytes(onedrive_link, 'utf-8'))
        data_bytes64_String = data_bytes64.decode('utf-8').replace('/','_').replace('+','-').rstrip("=")
        resultUrl = f"https://api.onedrive.com/v1.0/shares/u!{data_bytes64_String}/root/content"
        return resultUrl

    onedrive_link = "https://1drv.ms/x/s!Ahn8anFcbOc7gRXzVILu5OCJqvHG"
    onedrive_direct = create_onedrive_directdownload(onedrive_link)
    df = pd.read_excel(onedrive_direct, sheet_name='python-test')
    df.to_csv("data.csv")