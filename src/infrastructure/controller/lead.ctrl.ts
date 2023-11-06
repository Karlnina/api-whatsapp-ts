import { Request, Response } from "express";
import { LeadCreate } from "../../application/lead.create";
import { file } from "../../domain/media";


class LeadCtrl {
  constructor(private readonly leadCreator: LeadCreate) { }

  public sendCtrl = async ({ body }: Request, res: Response) => {
    const { message, phone } = body;
    const response = await this.leadCreator.sendMessageAndSave({ message, phone })
    res.send(response);
  };

  public sendMedia = async ({ body, file }: Request, res: Response) => {
    const { message, phone } = body;
    let media: file = file as file;
    media.filename = file?.originalname ?? 'archivo';
    const response = await this.leadCreator.sendMedia({ media, phone })
    res.send(response);
  };
}

export default LeadCtrl;
