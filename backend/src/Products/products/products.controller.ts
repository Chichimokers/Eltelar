import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
    UseInterceptors,
    UploadedFile,
  } from '@nestjs/common';

  import { FileInterceptor } from '@nestjs/platform-express';
  import { diskStorage } from 'multer';
  import { extname } from 'path';
import { ProductsService } from './products.service';
import { Product } from '../Product.entity';



@Controller('products')

export class ProductsController {

  constructor(private readonly telasService: ProductsService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('imagen', {
      storage: diskStorage({
        destination:'./images', 
        // Carpeta donde se guardarán las imágenes
        filename: (req, file, callback) => {
            
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);

          callback(null, `${uniqueSuffix}${extname(file.originalname)}`); // Nombre único para el archivo
        },
      }),
    }),
  )  async create(@UploadedFile() file: Express.Multer.File, @Body() tela: Product): Promise<Product> {
    // Guardar la URL de la imagen en la base de datos
    if (!file) {
        throw new Error('No se ha subido ningún archivo.');
      }
    tela.imagenUrl = file.path; // Guarda la ruta del archivo subido
    return this.telasService.create(tela);
  }

  @Get()
  findAll(): Promise<Product[]> {
    return this.telasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Product> {
    return this.telasService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() tela: Partial<Product>): Promise<Product> {
    return this.telasService.update(id, tela);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.telasService.remove(id);
  }

}
