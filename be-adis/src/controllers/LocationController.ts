import { BadRequestError, SuccessResponse } from '../helpers/utils';
import cityRepository from '../models/repositories/city.repository';
import countryRepository from '../models/repositories/country.repository';
import stateRepository from '../models/repositories/state.repository';
import { Request, Response } from 'express';
import { Like } from 'typeorm';
class LocationController {
  static findCountries = async (req: Request, res: Response) => {
    const { q } = req.query;

    const countries = await countryRepository.find({
      where: {
        name: Like(`%${q}%`),
      },
      select: {
        name: true,
        id: true,
        iso2: true,
        iso3: true,
        numericCode: true,
      },
    });

    new SuccessResponse({ message: 'find Countries', data: countries }).send(
      res
    );
  };

  static findStates = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);

    if (!id) throw new BadRequestError('Id must number');

    const countries = await stateRepository.find({
      where: { country: { id } },
      select: { id: true, name: true },
    });

    new SuccessResponse({ message: 'find Countries', data: countries }).send(
      res
    );
  };

  static findCities = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);

    if (!id) throw new BadRequestError('Id must number');

    const countries = await cityRepository.find({
      where: { state: { id } },
      select: { name: true, id: true },
    });

    new SuccessResponse({ message: 'find Countries', data: countries }).send(
      res
    );
  };
}

export default LocationController;
