export default {
  name: '按钮',
  type: 'el-button',
  props: {
    size: {
      type: 'string',
      enum: ['small', 'medium', 'large'],
      value: '',
      description: '尺寸',
    },
    type: {
      type: 'string',
      enum: ['primary', 'success', 'warning', 'danger', 'info'],
      value: '',
      description: '类型',
    },
    plain: {
      type: 'boolean',
      value: false,
      description: '是否为朴素按钮',
    },
  },
};
