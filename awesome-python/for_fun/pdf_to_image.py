"""
Reference: https://stackoverflow.com/questions/46184239/extract-a-page-from-a-pdf-as-a-jpeg
Description:
must install 'poppler'
$ brew install poppler
"""
# import module
from pdf2image import convert_from_path

# Store Pdf with convert_from_path function
FILE_NAME = 'english_grammar_in_use'
images = convert_from_path(f"{FILE_NAME}.pdf")

for i in range(len(images)):
    # Save pages as images in the pdf
    images[i].save(f"{FILE_NAME}-page-{i}.jpg", 'JPEG')

# from pdf2image import convert_from_path
# from tkinter import *
# from tkinter import messagebox
#
#
# def pdf2img():
#     try:
#         images = convert_from_path(str(e1.get()))
#         counter = 0
#         for img in images:
#             img.save(f"pdf_to_image\output-{counter}.jpg", 'JPEG')
#             counter += 1
#
#     except:
#         Result = "NO pdf found"
#         messagebox.showinfo("Result", Result)
#
#     else:
#         Result = "success"
#         messagebox.showinfo("Result", Result)
#
#
# master = Tk()
# Label(master, text="File Location").grid(row=0, sticky=W)
#
# e1 = Entry(master)
# e1.grid(row=0, column=1)
#
# b = Button(master, text="Convert", command=pdf2img)
# b.grid(row=0, column=2, columnspan=2, rowspan=2, padx=5, pady=5)
#
# mainloop()
