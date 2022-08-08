import {create} from 'react-test-renderer'
import {ProfileStatus} from './ProfileStatus'
import {store} from '../../../../../redux/reduxStore'
import { Provider } from 'react-redux'

describe('ProfileStatus component', () => {
    store.getState().profilePage.status = 'It-kamasutra.com'

    test('after creation <span> with status should be displayed with correct status', async () => {
        const component = create(<Provider store={store}><ProfileStatus/></Provider>)
        const root = component.root
        const span = await root.findByType('span')
        expect(span).not.toBeNull()
    })

    test(`after creation <input> status shouldn't be displayed`, () => {
        const component = create(<Provider store={store}><ProfileStatus/></Provider>)
        const root = component.root
        expect(() => {
            return root.findByType('input')
        }).toThrow()
    })

    test('after creation <span> with status text should be \'It-kamasutra.com\'', async () => {
        const component = create(<Provider store={store}><ProfileStatus/></Provider>)
        const root = component.root
        const span = await root.findByType('span')
        expect(span.children[0]).toBe('It-kamasutra.com')
    })

    test(`input should be displayed in editMode instead of span`, async () => {
        const component = create( <Provider store={store}><ProfileStatus/></Provider>)
        const root = component.root
        const span = await root.findByType('span')
        span.props.onDoubleClick()
        const input = await root.findByType('input')
        expect(input.props.value).toBe('It-kamasutra.com')
    })
})