import cv2
import os

def generate_low_quality_thumbnails():
    # Directorio donde están los videos
    video_dir = 'C:\\Users\\...'
    
    # Asegurarse que existe el directorio
    if not os.path.exists(video_dir):
        print(f"El directorio {video_dir} no existe")
        return

    # Recorrer todos los archivos en el directorio
    for filename in os.listdir(video_dir):
        if filename.lower().endswith(('.mp4', '.avi', '.mov', '.mkv')):
            video_path = os.path.join(video_dir, filename)
            
            # Abrir el video
            cap = cv2.VideoCapture(video_path)
            
            # Leer el primer frame
            ret, frame = cap.read()
            if ret:
                # Convertir a escala de grises
                gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
                
                # Reducir el tamaño
                small_frame = cv2.resize(gray_frame, (40, 30))
                
                # Guardar el thumbnail
                thumbnail_name = os.path.splitext(filename)[0] + '_thumb.jpg'
                thumbnail_path = os.path.join(video_dir, thumbnail_name)
                
                # Guardar con baja calidad
                cv2.imwrite(thumbnail_path, small_frame, [cv2.IMWRITE_JPEG_QUALITY, 25])
                
                print(f"Thumbnail generado: {thumbnail_name}")
            
            cap.release()

if __name__ == "__main__":
    generate_low_quality_thumbnails() 