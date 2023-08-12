import { Category } from '../models/entities/Category';
import { MigrationInterface, QueryRunner } from 'typeorm';

const data = [
  { category: 'Laptops', icon: 'mainicon icon maida-laptop' },
  { category: 'Empleos', icon: 'mainicon icon maida-briefcase' },
  { category: 'Ropa', icon: 'mainicon icon maida-t-shirt' },
  { category: 'Carros', icon: 'mainicon icon maida-car-1' },
  { category: 'Auditors', icon: 'mainicon icon maida-calculator' },
  { category: 'máscotas', icon: 'mainicon icon maida-zoo' },
  { category: 'Finance', icon: 'mainicon icon maida-town-hall' },
  { category: 'Art', icon: 'mainicon icon maida-art-gallery' },
  { category: 'Comida', icon: 'mainicon icon maida-fast-food' },
  { category: 'Club', icon: 'mainicon icon maida-bar' },
  { category: 'Logistics', icon: 'mainicon icon maida-delivery-transport-2' },
  { category: 'Electronicos', icon: 'mainicon icon maida-display' },
  { category: 'Cafe', icon: 'mainicon icon maida-cup' },
  { category: 'Doctores', icon: 'mainicon icon maida-case-medic' },
  { category: 'Entretenimiento', icon: 'fa fa-film' },
  { category: 'Juegos', icon: 'mainicon icon maida-soccer' },
  { category: 'Celulares', icon: 'mainicon icon maida-phone' },
  { category: 'Support', icon: 'mainicon icon' },
  { category: 'Libros', icon: 'fa fa-book' },
  { category: 'Para niños', icon: 'fa fa-child' },
];

export class InsertDb1691776562467 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.insert(Category, data);

      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      console.log(error);
      throw error;
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    console.log(queryRunner);
  }
}
