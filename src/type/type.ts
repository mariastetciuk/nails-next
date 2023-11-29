export type CloseModal = {
    togleModal: () => void;
  };

export type PropsBtnOrder = {
    style: string;
}

export type FormValues = {
  firstName: string
  phone: string
}

export type TextAnimationProps = {
  words: Array<string>
};

  export type Response = {
    title: string, 
    text: string,
  }

  export type CloseResponseModal = {
    closeModal: () => void;
    togleModal?: () => void;
    response: Response;
  };

  export type Gallery = {
    id: number;
    src: string;
  };

  export type CustomButtonProps = {
    onClick: ()=> void;
};


