import request from '@/utils/request'
export function getTest(apiRoute,ajaxData) {
    return request({
	    url: apiRoute,
	    method: 'post',
	    data: ajaxData
    })
}
export function getTeacherKQ(apiRoute,ajaxData) {
    return request({
	    url: apiRoute,
	    method: 'post',
	    data: ajaxData
    })
}
