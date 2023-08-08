"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
class BaseService {
    constructor(repository) {
        this.repository = repository;
    }
    index() {
        return this.repository.find();
    }
    findById(id) {
        return this.repository.findOneById(id);
    }
    findByIds(ids) {
        return this.repository.findByIds(ids);
    }
    store(data) {
        return this.repository.save(data);
    }
    async update(id, data) {
        await this.repository.update(id, data);
        return this.findById(id);
    }
    delete(id) {
        return this.repository.delete(id);
    }
}
exports.BaseService = BaseService;
