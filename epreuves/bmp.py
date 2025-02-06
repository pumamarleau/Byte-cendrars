from PIL import Image

def hide_message(image_path, output_path, message):
    img = Image.open(image_path)
    encoded = img.copy()
    width, height = img.size 
    message_binary = ''.join(format(ord(c), '08b') for c in message) + '00000000'
    message_index = 0
    
    for y in range(height):
        for x in range(width):
            pixel = list(img.getpixel((x, y)))
            for i in range(3):
                if message_index < len(message_binary):                                 
                    pixel[i] = pixel[i] & ~1 | int(message_binary[message_index])
                    message_index += 1
            encoded.putpixel((x, y), tuple(pixel))
            if message_index >= len(message_binary):
                break
        if message_index >= len(message_binary):
            break

    encoded.save(output_path)
    print(f"Message caché dans {output_path}")

def reveal_message(image_path):
    img = Image.open(image_path)
    binary_message = ''
    for pixel in img.getdata():
        for color in pixel[:3]:
            binary_message += str(color & 1)
    chars = [binary_message[i:i+8] for i in range(0, len(binary_message), 8)]
    message = ''
    for char in chars:
        ascii_char = chr(int(char, 2))
        if ascii_char == '\x00':
            break
        message += ascii_char
    print(message)
    return message