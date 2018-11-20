export class ResponseModel {
    status: number;
    message: string;

    constructor(_status?: number, _message?: string) {
        this.status = _status;
        this.message = _message;
    }

    get successResponse(): ResponseModel {
        return new ResponseModel(200, 'Proceso realizado con éxito');
    }

    get unauthorizeResponse(): ResponseModel {
        return new ResponseModel(401, 'No se encuentra autorizado para realizar este proceso');
    }

    get notAllowedMethodsResponse(): ResponseModel {
        return new ResponseModel(405, 'Método no válido');
    }

    get pageNotFoundResponse(): ResponseModel {
        return new ResponseModel(404, 'Ruta no encontrada');
    }

    get internalErrorResponse(): ResponseModel {
        return new ResponseModel(500, 'Error interno del servidor');
    }
}