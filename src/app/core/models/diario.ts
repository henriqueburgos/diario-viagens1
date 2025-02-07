import { Converter } from './converter';

export interface Diario {
  id?: string; 
  titulo: string;
  corpo: string;
  local: string;
  data: Date; 
  imagem?: string; 
  
  createdAt: Date; 
  updateAT?:Date;
  photoURL?: string;
  usuarioId?: string;
  usuarioNick?: string;
  usuarioName?: string;
  views: number;
  likes: string[];
  likesNumber:number;
  dLikeUid: string;
}

export const DiarioConverter: Converter<Diario> = {
  toFirestore: (data) => data, 
  fromFirestore: (snapshot, options) => {
    
    const obj = snapshot.data(options)!;

    return {
      ...obj, 
      data: obj['data']?.toDate(), 
      createdAt: obj['createdAt']?.toDate(),
      updateAT: obj['updateAT']?.toDate(),
  
   
     } as Diario;
  },
};
