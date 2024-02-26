import { create } from 'zustand'
import data from '@/dummy.json'
import {IStore, IKanban} from '@/interface'
import { v4 as uuidv4 } from 'uuid';

console.log({data})
const dumData = data.kanban[0] as IKanban // dummy for now
const dumDataList = data.kanban as IKanban[] // dummy for now
export const useStore = create<IStore>((set) => ({
    kanbanList: dumDataList,
    currentKanban: dumData,
    addKanban: (name) => set((state) => ({kanbanList: [...state.kanbanList, {id: uuidv4(), name, boards: []}]})),
    addBoard: (name, kanbanId) => set(state => add(state, name, kanbanId))
}))


const add = (state: IStore, name: string, parentId: string): IStore => {
    if(state.currentKanban.id !== parentId) {
        console.log(`${parentId} = didn't match`)
        return {...state}
    }

    const currentKanban = {...state.currentKanban}
    const newBoards = [...currentKanban.boards, {
        boardId: uuidv4(),
        header: name,
        cards: []
    }]

    return {
        ...state,
        currentKanban: {
            ...state.currentKanban,
            boards: newBoards
        }
    }
}
