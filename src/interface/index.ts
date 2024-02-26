export interface IComment {
    commentId: string;
    message: string;
    commentDate: string;
}

export interface ICard {
    cardId: string;
    cardName: string;
    assignedTo: string;
    comments: IComment[]
}

export interface IBoard {
    boardId: string;
    header: string;
    cards: ICard[]
}

export interface IKanban {
    id: string;
    name: string;
    boards: IBoard[]
}

export interface IStore {
    kanbanList: IKanban[];
    currentKanban: IKanban;
    // boards: IBoard[];
    addKanban: (name: string) => void
    addBoard: (name: string, kanbanId: string) => void
}